import { useRef } from "react";

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <div className="rc-accordion-card">
                <div className={`rc-accordion-toggle pl-3 pr-8 py-4 relative ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <p className={ `text-[28px] font-mono italic font font-medium    ${active === id ? 'text-white' : ''}`}>Q</p>
                    <h5 className=" rc-accordion-title absolute left-20 leading-5 max-w-[80%] noto-medium">{header}</h5>
                    <i className=" fa fa-chevron-down rc-accordion-icon"></i>
                </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0 mt-1 mx-2 leading-normal text-sm noto-regular'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;
