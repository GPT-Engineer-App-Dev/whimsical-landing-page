import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">SimpleLanding</h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Simple Landing Page</h2>
          <p className="text-xl mb-8">Discover amazing features and boost your productivity</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 SimpleLanding. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;