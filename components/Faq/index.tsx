import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/constants"


const Faq = () => {
    return (
        <div className="bg-[#FFFAFA] py-20">
            <div className="text-center mb-8">
                <h4 className="text-[#2F2F2F] text-[24px] lg:text-[40px] font-extrabold">Frequently Asked Questions</h4>
            </div>
            <Accordion type="single" className="w-10/12 md:w-6/12 mx-auto" collapsible>
                {faqs.map(item => (
                    <AccordionItem key={item.id} value={`item-${item.id}`}>
                        <AccordionTrigger className="text-[#040000] text-base md:text-lg font-bold">{item.question}</AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Faq