import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>HelloHello!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Welcome to your application. This message has been updated based on your input.</p>
            <Button>Get Started</Button>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;