/**
 * @copyright 2024 firedfrogg
 * @license Apache-2.0
 */


/**
 * Node modules
 */

import PropTypes from "prop-types";



const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
    return (
        <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-700 transition-colors group' + classes}>
            <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-zinc:bg-red-700 transition-colors">
                <img src={imgSrc} alt={label} width={32} height={32}>
                </img>
            </figure>

            <div>
                <h3 className="text-zinc-200 text-m">{label}</h3>
                <p className="text-zinc-200 text-xs">
                    {desc}
                </p>
            </div>
        </div>
    )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired
}

export default SkillCard