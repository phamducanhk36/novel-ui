import {itemDatamock} from "./mockdata";
import {
    Avatar,
    Card,
    Container as Container2,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Rating,
    Tooltip,
} from '@mui/material';

const Container = () => {
    const novels=itemDatamock
    return (
        <Container2>
            <ImageList
                gap={12}
                sx={{
                    mb: 8,
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(180px, 1fr))!important',
                }}
            >
                {novels.map((room) => (
                    <Card key={room.title}>
                        <ImageListItem sx={{ height: '100% !important' }}>
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)',
                                }}
                                title={room.title}
                                position="bottom"
                            />
                            <img
                                src={room.img}
                                alt={room.title}
                                loading="lazy"
                                style={{ cursor: 'pointer' }}
                            />

                        </ImageListItem>
                    </Card>
                ))}
            </ImageList>
        </Container2>
    );
};

export default Container;
