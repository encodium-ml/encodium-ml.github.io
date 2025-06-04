import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeExampleProps {
  title: string;
  code: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ title, code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
        <h4 className="text-sm font-medium">{title}</h4>
        <button
          onClick={copyToClipboard}
          className="p-1 transition-colors rounded hover:bg-gray-700"
          aria-label="Copy code"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
      <pre className="code-block">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeExample;