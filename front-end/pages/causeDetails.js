function CauseDetailss() {
    const router = useRouter()
    const { id, show } = router.query
    const [stateId, setStateId] = useState('')
    const [stateShow, setStateShow] = useState(false)

    useEffect(() => {
        setStateId(id)
        setStateShow(show)
    }, [id, show])

    return (
        <div>
            <h1>Cause Details</h1>
            <p>ID: {stateId}</p>
            <p>Show: {stateShow ? 'true' : 'false'}</p>
        </div>
    )
}
