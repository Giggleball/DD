const ReviewList = ({reviewNumber}) => {
    const reviews = [
        {
            content: "Ik bestel al een aantal jaartjes taarten en cupcakes bij desirable dishes. Hier vind je de lekkerste en mooiste taarten ever, echt een aanrader!!",
            author: "Dulia, juli 2018"
        },
        {
            content: "Voor een GirlCode meetup bij ons op kantoor hebben wij bij desirable dishes besteld, echt geen spijt van. Onze gasten waren zo onder de indruk van het 'echte' eten. Er was van alles wat en het was allemaal heerlijk!",
            author: "Elisabeth from Incentro, juni 2018"
        },
        {
            content: "I organised a lot of events and can honestly say the catering by Desirable Dishes is one of the very best we have ever had. We had a variety of food, so something for everyone. The next dish was even better than the last. I would highly recommend hiring Desiree for your next event!",
            author: "Ineke from GirlCode, juni 2018"
        },
        {
            content: "Super lekker! Zeker de moeite waard om een keer te proberen!",
            author: "Carolina, juli 2018"
        },
        {
            content: "Desirable Dishes heeft voor ons catering verzorgd met de verjaardag van mijn dochter. Er is ontzettend goed gelet op allergieÃ«n en toch waren de gerechten voortreffelijk. De loempies vlogen weg, de gasten waren onder de indruk en hebben gesmuld. Zeker voor herhaling!",
            author: "Janet, mei 2018"
        },
        {
            content: "Onlangs een taart besteld bij Desirable dishes. Het was een heerlijke, mooie taart met een eerlijke prijs. Ze is een aanrader! Ook voor haar hapjes en gerechten, ook die heb ik al mogen proeven.",
            author: "Laura, juli 2018"
        }
    ]

    const currentReview = reviews[reviewNumber]
    return (
        <div className="mb-wrap mb-style-2">
            <blockquote>
                <p>{currentReview.content}</p>
            </blockquote>
            <div className="mb-attribution">
                <p className="mb-author">
                    {currentReview.author}
                </p>
            </div>
        </div>
    )
}
export default ReviewList;
