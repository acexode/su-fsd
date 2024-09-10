interface ItemCardProps {
    item: {
      createdAt: string;
      fileName: string;
    };
  }
  
  const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
      <div className="box-border bg-gray-700 p-4 rounded-md shadow-md flex flex-col items-start
        w-full sm:w-full md:w-48 lg:w-96
        transition-all duration-300">
        <span className="text-sm text-gray-400">{item.createdAt}</span>
        <span className="md:text-lg sm:text-sm mt-3">{item.fileName}</span>
      </div>
    );
  };
  
  export default ItemCard;
  