import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { accordionData } from "@/constants"
import Link from "next/link"
import Container from "./Container"



export default function Accordions() {
    return (<>
<Container>


        <h1 className='md:text-5xl text-2xl font-semibold'>Questions? Answers.</h1>

        <Accordion className="md:text-2xl  " type="single" collapsible>
            {accordionData.map((item, i) => (
                <AccordionItem key={i} value={item.value}>
                    <AccordionTrigger className="md:text-2xl text-l">{item.title}</AccordionTrigger>
                    <AccordionContent className="mt-4">
                        {item.content}

                        <Link className="text-textLink" href='link'>
                            {item?.link}
                        </Link>
                    </AccordionContent>
                </AccordionItem>
            ))
        }
        </Accordion >

        </Container>
    </>
    )
}

