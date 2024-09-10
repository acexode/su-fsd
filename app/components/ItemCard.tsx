interface ItemCardProps {
    item: {
      createdAt: string;
      fileName: string;
    };
  }
  
  const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
      <div className="bg-gray-700 p-4 rounded-md shadow-md flex flex-col items-start">
        <span className="text-sm text-gray-400">{item.createdAt}</span>
        <span className="text-lg">{item.fileName}</span>
      </div>
    );
  };
  
  export default ItemCard;
  