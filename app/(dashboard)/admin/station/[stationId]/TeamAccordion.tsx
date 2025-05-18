"use client";

import { Team } from "@/types/team";
import { Accordion, AccordionItem, Image } from "@heroui/react";

type Props = {
  team: Team;
};

export default function TeamAccordion(props: Props) {
  return (
    <div
      className="backdrop-blur-sm rounded-md flex gap-x-4
                shadow-sm shadow-sky-900"
    >
      {/* Team */}
      <Accordion className="dark">
        <AccordionItem
          title={props.team.name}
          subtitle={props.team.identifier}
          // Team Logo
          startContent={
            <div className="w-[64px]">
              <Image alt="Team Logo" src={props.team.logo} />
            </div>
          }
        >
          {/* Members */}
          {props.team.members.map((member, i) => (
            <Accordion key={i} variant="splitted" className="mb-2 dark">
              <AccordionItem
                title={member.name}
                subtitle={`Score: ${member.score.toString()}`}
              >
                <div>{/* TODO: implement score adjust */}</div>
              </AccordionItem>
            </Accordion>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
