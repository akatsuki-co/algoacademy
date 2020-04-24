import useSwr from "swr"
import Sidebar from "../components/Sidebar"
import Content from "../components/Content"
import fetcher from "../utils/fetcher"
import routes from "../docs/python"
import ContentLayout from "../components/ContentLayout"

const Python = () => {
  const { data, error } = useSwr("/api/python", fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ContentLayout>
      <Sidebar data={data}></Sidebar>
      <Content routes={routes}></Content>
    </ContentLayout>
  )
}

export default Python
