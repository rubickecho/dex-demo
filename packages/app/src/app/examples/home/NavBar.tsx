export const NavBar = () => {
    return (
        <div className="navbar bg-white rounded-lg border p-2">
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-100"></div>
                    <a className="text-xl font-normal">TrendWise</a>
                </div>
            </div>
            <div className="flex-none flex items-center gap-4">
                <div className="flex gap-1">
                    <button className="btn btn-sm btn-ghost normal-case">Overview</button>
                    <button className="btn btn-sm btn-ghost normal-case">Positions</button>
                    <button className="btn btn-sm btn-ghost normal-case">Wallet</button>
                    <button className="btn btn-sm btn-ghost normal-case">Analytics</button>
                    <button className="btn btn-sm bg-gray-100 normal-case">History</button>
                    <button className="btn btn-sm btn-ghost normal-case">Support</button>
                    <button className="btn btn-sm btn-ghost normal-case">Settings</button>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-sm btn-outline normal-case">Ethereum</button>
                    <button className="btn btn-sm btn-outline normal-case">178 ETH</button>
                </div>
            </div>
        </div>
    );
};