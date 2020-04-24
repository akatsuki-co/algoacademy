import useSwr from "swr"
import Sidebar from "../components/Sidebar"
import Content from "../components/Content"
import fetcher from "../utils/fetcher"
import routes from "../docs/javascript"
import ContentLayout from "../components/ContentLayout"

const Javascript = () => {
  const { data, error } = useSwr("/api/javascript", fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ContentLayout>
      <Sidebar data={data}></Sidebar>
      <Content routes={routes}></Content>
    </ContentLayout>
  )
}

export default Javascript
