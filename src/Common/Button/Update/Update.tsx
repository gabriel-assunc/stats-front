import Button from "@/Common/Button/Button"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { RxUpdate } from "react-icons/rx"
import { updateStyle } from "./UpdateStyle"

interface UpdateButtonProps {
    updateFunction: () => Promise<Response>,
    invalidateKey?: string,
}

const UpdateButton = ({ updateFunction, invalidateKey }: UpdateButtonProps) => {
    const queryClient = useQueryClient()

    const { isFetching: isUpdating, refetch } = useQuery({
        queryFn: () => updateFunction(),
        queryKey: ['updateTeam'],
        enabled: false,
        staleTime: Infinity,
    })

    const updateTeam = async () => {
        await refetch().then(() => {
            if (!!invalidateKey)
                queryClient.invalidateQueries({ queryKey: [invalidateKey] })
        })
    }

    return <Button onClick={updateTeam} className={updateStyle({ isUpdating })}>
        <RxUpdate className="w-full h-full" />
    </Button>
}

export default UpdateButton