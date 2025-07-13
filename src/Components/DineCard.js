export default function DineCard({dineData}){

    return (
        <div className="max-w-sm flex-none">
            <a target="_blank" href={dineData?.cta?.link}>
            <div className="relative">
                <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+dineData?.info?.mediaFiles[0]?.url}></img>
                
                <div className="absolute bg-gradient-to-t from-black h-25 bottom-0 left-0 right-0 to-transparent"></div>
                <p className="absolute bottom-2 left-2 text-2xl font-bold text-white z-10">{dineData?.info?.name}</p>
                <p className="absolute bottom-2 right-2 text-xl font-bold text-white z-10">{dineData?.info?.rating?.value}</p>
            </div>
            </a>
        </div>
    )
}