export const TradingChart = () => {
    return (
        <div className="bg-white border rounded-lg mt-2">
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4">
                        <div className="flex gap-1">
                            <button className="btn btn-xs btn-ghost">Time</button>
                            <button className="btn btn-xs btn-ghost">15m</button>
                            <button className="btn btn-xs bg-gray-100">4h</button>
                            <button className="btn btn-xs btn-ghost">1d</button>
                            <button className="btn btn-xs btn-ghost">1w</button>
                        </div>
                        <div className="flex gap-1">
                            <button className="btn btn-xs btn-ghost">Original</button>
                            <button className="btn btn-xs btn-ghost">TradingView</button>
                            <button className="btn btn-xs btn-ghost">Depth</button>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <button className="btn btn-xs btn-ghost">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="w-full h-[400px] bg-gray-50 rounded-lg"></div>
            </div>
        </div>
    );
};