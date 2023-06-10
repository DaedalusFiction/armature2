import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Stack } from "@mui/system";
import Link from "next/link";
import { Instagram } from "@mui/icons-material";

const SocialMediaIconsSidebar = ({ color, direction }) => {
    return (
        <Paper
            sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                padding: "1rem .5rem .75rem .5rem",
            }}
        >
            <Stack direction={direction} spacing={1}>
                <Typography variant="h3" sx={{ fontSize: ".75rem" }}>
                    FOLLOW
                </Typography>

                <Link href="https://www.facebook.com/profile.php?id=100066422816647">
                    <Tooltip title="facebook" placement="left">
                        <IconButton aria-label="facebook" id="share-facebook">
                            <FacebookIcon color={color} />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link href="https://www.instagram.com/flavorcville/">
                    <Tooltip title="Instagram" placement="left">
                        <IconButton aria-label="twitter" id="share-twitter">
                            <Instagram color={color} />
                        </IconButton>
                    </Tooltip>
                </Link>
            </Stack>
        </Paper>
    );
};

export default SocialMediaIconsSidebar;
