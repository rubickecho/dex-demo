export const CurrencyPairs = () => {
    const pairs = [
        {
            pair: 'BTC/USDT',
            price: '0.3191',
            change: '0.3191w'
        },
        {
            pair: 'ETH/USDT',
            price: '0.3191',
            change: '0.3191w'
        },
        {
            pair: 'BNB/USDT',
            price: '0.3191',
            change: '0.3191w'
        },
        {
            pair: 'XPR/USDT',
            price: '0.7512',
            change: '1.23%',
            isUp: true
        }
    ];

    return (
        <div className="flex gap-2">
            {pairs.map((pair, index) => (
                <div key={index} className="flex-1 bg-white border rounded-lg p-3">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100"></div>
                        <div>
                            <div className="font-medium">{pair.pair}</div>
                            <div className="flex items-center gap-2 text-sm">
                                <span>{pair.price}</span>
                                <span className={pair.isUp ? "text-green-500" : "text-gray-500"}>
                                    {pair.change}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};