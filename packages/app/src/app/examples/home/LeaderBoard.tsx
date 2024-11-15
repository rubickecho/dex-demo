export const LeaderBoard = () => {
    return (
        <div className="card bg-base-100 shadow-xl mt-4">
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">Crypto Leaders of Growth and Fall</h2>
                    <span className="badge">WEEK/MONTH</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                        <div className="text-xl font-bold">$64,189.90</div>
                        <div>Bitcoin</div>
                        <div className="text-success">32.1%</div>
                        <div className="text-sm opacity-50">Feb</div>
                    </div>
                    <div>
                        <div className="text-xl font-bold">$3,144.02</div>
                        <div>Doge</div>
                        <div className="text-success">16.1%</div>
                    </div>
                    <div>
                        <div className="text-xl font-bold">$12,500</div>
                        <div>Full-time</div>
                        <div>Stable</div>
                        <div className="text-sm opacity-50">1-28</div>
                    </div>
                </div>
            </div>
        </div>
    );
};