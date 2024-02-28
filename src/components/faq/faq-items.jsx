const FAQList = () => {
    const faqList = [
        {
            question: "Welke bestelde producten kan ik invriezen?",
            answer: "U kunt de loempia's, kroketten en pasteitjes 3 maanden invriezen. Voor het bereiden goed laten ontdooien en op kamertemperatuur bakken in een koekenpan."
        },
        {
            question: "Hoe kan ik mijn snacks het best bakken?",
            answer: "In een koekenpan olie heet laten worden, doe een teentje in de olie om een indicatie te krijgen wanneer het op temperatuur is. Bak het product altijd aan beide kanten even aan om barsten te voorkomen. Laat het daarna goudbruin worden.",
            tip: "*zorg dat het vuur niet te hoog is anders bruint het product aan de buitenkant en blijft het van binnen on verhit."
        },
        {
            question: "Wat als ik een allergie heb, kan ik dan nog bestellen?",
            answer: "Bij Desirable Dishes word er gewerkt met verse (seizoen) producten. Mocht er sprake is van een allergie, dan kan hier vaak rekening mee worden gehouden."
        },
        {
            question: "Kan ik een glutenvrije taart bestellen?",
            answer: "Helaas leveren wij (momenteel) geen glutenvrije producten"
        },
        {
            question: "Waarom is er een minimale bestel hoeveelheid?",
            answer: "Alle producten worden vers op bestelling gemaakt, uit de minimale hoeveelheid ingrediÃ«nten komen meestal 20 stuks. Een bestelling minder dan 20 stuks is niet rendabel."
        },
        {
            question: "Is er een maximaal bestel aantal?",
            answer: "Desirable Dishes is een eenmanszaak, het bereiden van gerechten voor meer dan 100 personen is mede hierdoor niet haalbaar."
        },
        {
            question: "Hoe ver van tevoren moet ik en bestelling plaatsten?",
            answer: "2 weken."
        },
        {
            question: "Moet ik een aanbetaling doen?",
            answer: "50% van het totaal bedrag dient minimaal 5 dagen van tevoren overgeschreven zijn. Indien dit niet is gedaan, zal de bestelling worden geannuleerd."
        },
        {
            question: "Kan ik mijn bestelling annuleren?",
            answer: "Een bestelling kan tot 48 uur van tevoren kosteloos worden geannuleerd. Na 48 uur zal de helft van het totaal bedrag in rekening worden gebracht."
        }
    ]

    return (
            <ul className='faq-list'>
                {faqList.map((faq, index) => (
                    <li key={index}>
                        <h5 className='faq-list--question'>{faq.question}</h5>
                        <p className='faq-list--answer'>{faq.answer}</p>
                        <i className='faq-list--tip'>{faq?.tip}</i>
                    </li>
                ))}
            </ul>
    )
}
export default FAQList;
