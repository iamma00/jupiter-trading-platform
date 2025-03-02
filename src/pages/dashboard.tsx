// pages/dashboard.tsx
"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Dummy trade execution function (replace with real Jupiter API integration)
async function executeTrade({
  mode,
  amount,
  limitPrice,
  stopLoss,
  takeProfit,
}: {
  mode: string;
  amount: number;
  limitPrice: number;
  stopLoss: number;
  takeProfit: number;
}) {
  console.log("Trade Execution:", { mode, amount, limitPrice, stopLoss, takeProfit });
  // Replace with Jupiter API call here
  return true;
}

export default function Dashboard() {
  const [mode, setMode] = useState<"INSTANT" | "TRIGGER" | "RECURRING">("INSTANT");
  const [amount, setAmount] = useState<number>(1);
  const [limitPrice, setLimitPrice] = useState<number>(100);
  const [stopLoss, setStopLoss] = useState<number>(95);
  const [takeProfit, setTakeProfit] = useState<number>(110);
  const [searchValue, setSearchValue] = useState("");

  const handleTrade = async () => {
    await executeTrade({ mode, amount, limitPrice, stopLoss, takeProfit });
    alert("Trade executed!");
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
        <Card className="w-full max-w-lg bg-gray-800 shadow-lg">
          <CardHeader className="border-b border-gray-700">
            <CardTitle className="text-2xl text-emerald-500 font-bold">Advanced Trading</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Section */}
            <div className="relative">
              <Input
                placeholder="Search tokens..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-gray-700 placeholder-gray-400 text-white"
              />
              <Button
                variant="default"
                className="absolute right-2 top-2 bg-emerald-500 text-black hover:bg-emerald-600"
              >
                DIG IN
              </Button>
            </div>

            {/* Tabs for mode selection */}
            <Tabs
              defaultValue="INSTANT"
              onValueChange={(value) => setMode(value as "INSTANT" | "TRIGGER" | "RECURRING")}
            >
              <TabsList className="bg-gray-700 rounded">
                <TabsTrigger
                  value="INSTANT"
                  className="bg-gray-700 text-white data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
                >
                  INSTANT
                </TabsTrigger>
                <TabsTrigger
                  value="TRIGGER"
                  className="bg-gray-700 text-white data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
                >
                  TRIGGER
                </TabsTrigger>
                <TabsTrigger
                  value="RECURRING"
                  className="bg-gray-700 text-white data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
                >
                  RECURRING
                </TabsTrigger>
              </TabsList>
              <TabsContent value="INSTANT">
                <p className="text-sm text-gray-400">Instant trading mode.</p>
              </TabsContent>
              <TabsContent value="TRIGGER">
                <p className="text-sm text-gray-400">Trigger orders for automated execution.</p>
              </TabsContent>
              <TabsContent value="RECURRING">
                <p className="text-sm text-gray-400">Set recurring orders.</p>
              </TabsContent>
            </Tabs>

            {/* Sell/Buy Section */}
            <div className="flex justify-between items-center bg-gray-700 p-3 rounded">
              <div className="text-center">
                <p className="text-xs text-gray-400">Selling</p>
                <p className="font-semibold text-white">USDC</p>
              </div>
              <div className="text-xl text-gray-400 hover:text-emerald-400 transition">⇆</div>
              <div className="text-center">
                <p className="text-xs text-gray-400">Buying</p>
                <p className="font-semibold text-white">SOL</p>
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="bg-gray-700 text-white"
              />
              <Input
                type="number"
                placeholder="Limit Price"
                value={limitPrice}
                onChange={(e) => setLimitPrice(Number(e.target.value))}
                className="bg-gray-700 text-white"
              />
              <Input
                type="number"
                placeholder="Stop Loss"
                value={stopLoss}
                onChange={(e) => setStopLoss(Number(e.target.value))}
                className="bg-gray-700 text-white"
              />
              <Input
                type="number"
                placeholder="Take Profit"
                value={takeProfit}
                onChange={(e) => setTakeProfit(Number(e.target.value))}
                className="bg-gray-700 text-white"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3">
            <WalletMultiButton className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-2 rounded" />
            <Button onClick={handleTrade} className="w-full bg-emerald-600 hover:bg-emerald-500 text-black font-bold">
              Execute Trade
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
