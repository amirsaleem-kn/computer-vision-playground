import Layout from "../../components/layout";
import { GridList, GridListTile, GridListTileBar, IconButton, ListSubheader, withWidth } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import projects_list from "../../data/computer-vision/projects/list.json";
import { isWidthUp } from '@material-ui/core/withWidth';
import Link from "next/link";

const Playgroud = (props) => {
    const getGridListCols = () => {
        if (isWidthUp('xl', props.width)) {
          return 4;
        }
    
        if (isWidthUp('lg', props.width)) {
          return 4;
        }
    
        if (isWidthUp('md', props.width)) {
          return 3;
        }
    
        return 1;
      }
    return (
        <Layout title="Computer Vision Projects">
            <GridList cellHeight={180} cols={1}>
                <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Projects</ListSubheader>
                </GridListTile>
            </GridList>
            <GridList cellHeight={280} cols={getGridListCols()}>
                {
                    projects_list.data.map((item) => {
                        return (
                            <GridListTile key={"1"} cols={item.cols || 1}>
                                <img src={item.image_url} alt={item.title} />
                                <GridListTileBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${item.title}`}>
                                            <Link href={`playground/[id]`} as={`playground/${item.id}`}><InfoIcon color="primary" /></Link>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        )
                    })
                }
            </GridList>
        </Layout>
    )
}

export default withWidth()(Playgroud);
