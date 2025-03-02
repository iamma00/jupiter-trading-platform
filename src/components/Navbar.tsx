"use client";
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gray-800 shadow-md">
      <div className="text-2xl font-bold text-emerald-500">Jupiter Trading</div>
      <div>
        <WalletMultiButton className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-2 px-4 rounded" />
      </div>
    </nav>
  );
}