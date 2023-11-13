'use cleint';

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="max-w-[1536px]  mx-auto xl:px-20 md:px-6 sm:px-2 px-4">
            {children}
        </div>
    )
}

export default Container