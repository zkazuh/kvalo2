import { useEffect, useState } from 'react';
import { ethers, Contract, JsonRpcProvider } from 'ethers';

const PEPE_CONTRACT = '0x6982508145454ce325ddbe47a25d4ec3d2311933';
const ABI = [
  'function balanceOf(address) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
  'event Transfer(address indexed from, address indexed to, uint256 value)'
];

type TransferEvent = {
  from: string;
  to: string;
  value: string;
  timestamp: string;
};

export default function PepeTrackerDashboard() {
  const [provider, setProvider] = useState<JsonRpcProvider | null>(null);
  const [contract, setContract] = useState<Contract | null>(null);
  const [address, setAddress] = useState<string>('');
  const [balance, setBalance] = useState<string | null>(null);
  const [totalSupply, setTotalSupply] = useState<string | null>(null);
  const [transfers, setTransfers] = useState<TransferEvent[]>([]);

  useEffect(() => {
    const init = async () => {
      const ethProvider = new ethers.JsonRpcProvider("https://eth.llamarpc.com");
      const pepe = new ethers.Contract(PEPE_CONTRACT, ABI, ethProvider);

      setProvider(ethProvider);
      setContract(pepe);
      console.log(provider);

      const supply = await pepe.totalSupply();
      setTotalSupply(ethers.formatUnits(supply, 18));

      pepe.on('Transfer', (from: string, to: string, value: bigint) => {
        const formatted: TransferEvent = {
          from,
          to,
          value: ethers.formatUnits(value, 18),
          timestamp: new Date().toLocaleTimeString()
        };

        setTransfers(prev => [formatted, ...prev.slice(0, 9)]);
      });
    };

    init();
  }, []);

  const fetchBalance = async () => {
    if (!ethers.isAddress(address)) return alert("Endereço inválido");
    if (!contract) return;

    const bal = await contract.balanceOf(address);
    setBalance(ethers.formatUnits(bal, 18));
  };

  return (
    
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <title>PepeTracker Dashboard</title>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Painel PEPECOIN em Tempo Real</h1>

      <div style={{ border: '1px solid #ccc', padding: '16px', marginTop: '16px' }}>
        <input
          type="text"
          placeholder="Digite o endereço da carteira"
          value={address}
          onChange={e => setAddress(e.target.value)}
          style={{ padding: '8px', marginRight: '8px', width: '300px' }}
        />
        <button onClick={fetchBalance} style={{ padding: '8px 12px' }}>Ver Saldo</button>
        {balance !== null && <p style={{ marginTop: '8px' }}>Saldo: <strong>{balance}</strong> PEPE</p>}
      </div>

      <div style={{ border: '1px solid #ccc', padding: '16px', marginTop: '16px' }}>
        <p>Total de tokens PEPE em circulação: <strong>{totalSupply}</strong></p>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '16px', marginTop: '16px' }}>
        <h2 style={{ fontWeight: 'bold' }}>Últimas Transferências:</h2>
        <ul style={{ fontSize: '14px', maxHeight: '300px', overflowY: 'auto', padding: 0 }}>
          {transfers.map((t, i) => (
            <li key={i} style={{ borderBottom: '1px solid #eee', padding: '8px 0', listStyle: 'none' }}>
              <span>{t.timestamp}</span> -<br />
              De: {t.from.slice(0, 6)}... Para: {t.to.slice(0, 6)}...<br />
              Quantia: {t.value} PEPE
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
