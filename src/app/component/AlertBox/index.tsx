// components/Alert.tsx
import { FC } from 'react';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  title: string;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({ type, message, title, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const textColor = type === 'success' ? 'text-white' : 'text-white';
  const borderColor = type === 'success' ? 'border-green-700' : 'border-red-700';
  const icon = type === 'success' ? '✓' : '⚠';

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 ${bgColor} ${textColor} ${borderColor} border-l-4 rounded-lg shadow-xl max-w-sm w-full animate-fade-in`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{icon}</span>
          <strong className="font-semibold text-lg">{title}</strong>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition duration-150 ease-in-out"
          >
          ✕
        </button>
      </div>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default Alert;
