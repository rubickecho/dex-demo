import React from 'react';
import { NavBar } from './NavBar';
import { CurrencyPairs } from './CurrencyPairs';
import { TradingChart } from './TradingChart';
import { SwapCard } from './SwapCard';
import { TransactionList } from './TransactionList';
import { LeaderBoard } from './LeaderBoard';

export default function TradingInterface() {
    return (
        <div className="container mx-auto p-4">
            <NavBar />
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-span-2">
                    <CurrencyPairs />
                    <TradingChart />
                    <TransactionList />
                </div>
                <div className="col-span-1">
                    <SwapCard />
                    <LeaderBoard />
                </div>
            </div>
        </div>
    );
};