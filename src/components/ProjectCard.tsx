export interface ProjectCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
}

export default function ProjectCard({
  title,
  subtitle,
  tags,
  date,
}: ProjectCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 hover:bg-slate-700/50 cursor-pointer transition-all">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-blue-400">{title}</h3>
          <p className="text-slate-400">{subtitle}</p>
        </div>
        <span className="text-sm text-slate-500">{date}</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-slate-700 text-slate-300 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
