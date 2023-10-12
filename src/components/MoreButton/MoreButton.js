function MoreButton( { isVisible, onClick } ) {
    if (isVisible) {
        return (
            <section className="button page__padding">
                <button onClick={onClick} className="button__movies_visible button__movies">Ещё</button>
            </section>
        )
    }

}

export default MoreButton;