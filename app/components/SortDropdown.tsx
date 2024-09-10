interface SortDropdownProps {
    sortMethod: string;
    setSortMethod: (value: string) => void;
  }
  
  const SortDropdown: React.FC<SortDropdownProps> = ({ sortMethod, setSortMethod }) => {
    return (
      <div className="flex justify-between mb-6">
        <select
          value={sortMethod}
          onChange={(e) => setSortMethod(e.target.value)}
          className="p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
        >
          <option value="createdAtAsc">Sort by created at</option>
          <option value="filenameAsc">Sort by filename (Asc)</option>
          <option value="filenameDesc">Sort by filename (Desc)</option>
        </select>
      </div>
    );
  };
  
  export default SortDropdown;
  