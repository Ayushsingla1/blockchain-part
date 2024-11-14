import { ABI, contractAddress } from "@/configs/contract";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";

const BuyMovie = () => {
  const { writeContract, isPending, data: hash } = useWriteContract();
  const { isSuccess, isError } = useWaitForTransactionReceipt({
    hash
  });

  const purchaseMovie = async () => {
    await writeContract({
      abi: ABI,
      address: contractAddress,
      functionName: "purchaseMovie",
      args: [0],
      value: 10n,
    });
  };

  console.log(hash);
  
  if (isSuccess) {
    return <div>movie purchased successfully</div>;
  }
  
  if (isError) {
    return <div>error</div>;
  }
  
  return (
    <div>
      <button 
        onClick={purchaseMovie}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        disabled={isPending}
      >
        {isPending ? "pending..." : "purchase"}
      </button>
    </div>
  );
};

export default BuyMovie;