import { styled } from "@mui/system"
import { useEffect, useMemo, useState } from "react"
import { useInView } from "react-intersection-observer"
import useSWR from "swr"
import AppDivider from "../modules/common/components/AppDivider"
import AppTitle from "../modules/common/components/AppTitle"
import Layout from "../modules/layout"
import TagsCard from "../modules/tags/components/TagsCard"
import { getRandomInt } from "../utils/numbers"
import { fetcher } from "../utils/swr"

interface Data {
  id: string
  name: string
  count: number
}

interface DataDisplay {
  key: string
  tag: string
  title: string
  subtitle: string
}

const Wrapper = styled('div')(({ theme }) => {
  return {
    paddingLeft: '25px',
    paddingRight: '25px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  }
})

const WrapperCard = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 150px)',
  justifyContent: 'space-between'
})

const WrapperTagsCard = styled('div')(({ theme }) => {
  return {
    marginBottom: '24px',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '36px'
    }
  }
})

const TAGS = [
  'cool',
  'beautiful',
  'easy',
  'summary',
  'hot',
  'passage specific'
]

// const mockData = [
//   {
//     tag: 'cool',
//     title: 'This is a title',
//     subtitle: 'by username'
//   },
//   {
//     tag: 'beautiful',
//     title: 'This is a title',
//     subtitle: 'by username'
//   },
//   {
//     tag: 'easy',
//     title: 'This is a title',
//     subtitle: 'by username'
//   },
//   {
//     tag: 'summary',
//     title: 'This is a title',
//     subtitle: 'by username'
//   },
//   {
//     tag: 'hot',
//     title: 'This is a title',
//     subtitle: 'by username'
//   },
//   {
//     tag: 'passage111111',
//     title: 'This is a title',
//     subtitle: 'by username'
//   }
// ]

const PAGE_LIMIT_DEFAULT = 8

const Tags = () => {
  const { data, error, isValidating } = useSWR('/tags', fetcher)
  const { ref: lastAnchor, inView } = useInView()
  const [pageLimit, setPageLimit] = useState<number>(PAGE_LIMIT_DEFAULT)

  useEffect(() => {
    if (inView) {
      setPageLimit(pageLimit => pageLimit + PAGE_LIMIT_DEFAULT)
    }
  }, [inView])

  const dataDisplay: DataDisplay[] = useMemo(() => {
    if (data && data.length) {
      return data
        .slice(0, pageLimit)
        .map(({ id, name, count }: Data, index: number) => {
          return (
            {
              key: `${id}_${index}`,
              tag: TAGS[getRandomInt(0, TAGS.length)],
              title: name,
              subtitle: count.toString()
            }
          )
        })
    }

    return []
  }, [data, pageLimit])

  return (
    <Layout data-cid='Tags' showNav={false}>
      <Wrapper>
        <AppTitle>tags</AppTitle>
        <AppDivider top={24} />
        <WrapperCard>
          {dataDisplay.map(({ key, tag, title, subtitle }) => {
            return (
              <WrapperTagsCard key={key}>
                <TagsCard
                  tag={tag}
                  title={title}
                  subtitle={subtitle}
                  loading={isValidating}
                />
              </WrapperTagsCard>
            )
          })}
          <div ref={lastAnchor}></div>
        </WrapperCard>
      </Wrapper>
    </Layout>
  )
}

export default Tags
