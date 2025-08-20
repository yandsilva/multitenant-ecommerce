import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-5 px-5">
      <Button variant={"elevated"}>Hello World</Button>
      <Input className="my-3" placeholder="Digite aqui" />
      <Progress value={50} />
      <Textarea className="mt-5" placeholder="Digite aqui" />
    </div>
  );
}
