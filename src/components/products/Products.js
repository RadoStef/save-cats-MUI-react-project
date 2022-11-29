import { Box } from "@mui/material";
import { itemData } from "../data";
import { styles } from "./styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ListSubheader from "@mui/material/ListSubheader";

const Products = () => {
  return (
    <Box sx={{ width: "100%", margin: "50px auto", flexGrow: 1 }}>
      <ImageListItem key="Subheader">
        <ListSubheader component="div" sx={{ ...styles.Title }}>
          <h1>Waiting for their owners</h1>
        </ListSubheader>
      </ImageListItem>
      <ImageList
        variant="masonry"
        sx={{
          columnCount: {
            xs: "1 !important",
            sm: "2 !important",
            md: "3 !important",
            lg: "3 !important",
            xl: "3 !important",
          },
          padding: "50px",
        }}
        gap={22}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`images/${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`images/${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

            <ImageListItemBar
              title={item.title}
              sx={{ ...styles.iconBtn }}
              actionIcon={
                <IconButton>
                  <FavoriteIcon sx={{ ...styles.favBtn }} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Products;
