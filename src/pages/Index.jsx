import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Navigation */}
      <header className="bg-primary text-primary-foreground p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Application</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Button variant="ghost">Home</Button></li>
              <li><Button variant="ghost">About</Button></li>
              <li><Button variant="ghost">Contact</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Hello! This is your updated application with a navigation menu. Feel free to modify and expand it as needed.</p>
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