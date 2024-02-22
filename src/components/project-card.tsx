import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  repositoryUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  repositoryUrl,
}: Props) {
  return (
    <Card className="relative flex h-full w-full flex-col overflow-hidden border border-muted p-3 lg:aspect-[1.1]">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-2 text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-2 hover:underline"
              >
                {title}
              </a>
            ) : (
              title
            )}
            {repositoryUrl && (
              <Button className="size-6" variant="outline" size="icon" asChild>
                <a target="_blank" href={repositoryUrl}>
                  <GithubIcon className="size-3" />
                </a>
              </Button>
            )}
            <span className="absolute top-2.5 right-2.5 h-1 w-1 rounded-full bg-green-500"></span>
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="pointer-events-none mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
