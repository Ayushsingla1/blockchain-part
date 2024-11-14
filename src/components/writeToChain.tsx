import { ABI, contractAddress } from "@/configs/contract";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";

const Writing = () => {
  const { writeContract, data: hash, isPending } = useWriteContract();
  
  // Wait for transaction confirmation
  const { isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const add = async () => {
    try {
      await writeContract({
        abi: ABI,
        address: contractAddress,
        functionName: "addMovie",
        args: ["Cristiano", "Documentary of a young boy from madeira", 2, "dsfjgnjsj23"],
      });
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div className="space-y-4">
      <button 
        onClick={add}
        disabled={isPending}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isPending ? "Processing..." : "Add Movie"}
      </button>

      {isSuccess && (
          <p className="mt-2 text-green-700">
            Congratulations! Your movie has been successfully added to the blockchain.
          </p>
      )}
    </div>
  );
};

export default Writing;