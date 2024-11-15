export const TransactionList = () => {
    return (
        <div className="bg-white border rounded-lg mt-2 p-4">
            <table className="w-full">
                <thead>
                    <tr className="text-left text-sm text-gray-500">
                        <th className="pb-4">Buying currency</th>
                        <th className="pb-4">Sell currency</th>
                        <th className="pb-4">Transaction status</th>
                        <th className="pb-4">Sell rate</th>
                        <th className="pb-4"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="py-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gray-100"></div>
                                <div>
                                    <div className="font-medium">5,31415ETH/BTC</div>
                                    <div className="text-sm text-gray-500">14212,14 Market</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="font-medium">5,31531ETH/BTC</div>
                            <div className="text-sm text-gray-500">14212,14 Market</div>
                        </td>
                        <td>
                            <div>In Progress</div>
                            <div className="text-sm text-gray-500">June 9, 2024, 12:46 am</div>
                        </td>
                        <td>0.31921</td>
                        <td>
                            <button className="btn btn-xs btn-ghost">...</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};