export default function ProjectCardSkeleton() {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-gray-100 animate-pulse">
      <div className="h-6 w-2/3 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-5/6 bg-gray-300 rounded mb-4"></div>
      <div className="flex gap-2">
        <div className="h-5 w-16 bg-gray-300 rounded"></div>
        <div className="h-5 w-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
