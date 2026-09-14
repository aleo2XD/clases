export default function Index({ index = 0, total = 0 }) {
    return (
        <div className="Index">
            {index + 1} / {total}
        </div>
    )
}
