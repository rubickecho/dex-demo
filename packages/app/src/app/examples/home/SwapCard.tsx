export const SwapCard = () => {
    return (
        <div className="bg-white border rounded-lg p-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-100"></div>
                    <span className="text-sm">Kgi2rQ49aj0la..las51</span>
                </div>
                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Free Plan</span>
            </div>

            <div className="text-2xl font-bold mt-6">19,964.50 USD</div>

            <div className="mt-6">
                <div className="text-sm mb-2">You Send</div>
                <div className="flex items-center justify-between border rounded-lg p-3">
                    <input type="text" value="15,000.00" className="outline-none w-2/3" />
                    <span className="text-sm text-gray-500">19,964.50 max</span>
                </div>
            </div>

            <div className="mt-4">
                <div className="text-sm mb-2">You Receive</div>
                <div className="flex items-center justify-between border rounded-lg p-3">
                    <input type="text" value="5,061349" className="outline-none w-2/3" />
                    <span className="text-sm">ETH</span>
                </div>
            </div>

            <button className="btn btn-primary w-full mt-6 normal-case">Swap Now</button>
        </div>
    );
};