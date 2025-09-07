'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        {/* Hello World Section */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-8 shadow-2xl">
            <span className="text-6xl">🌍</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Hello World
          </h1>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors mx-auto"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
