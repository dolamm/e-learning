import { Nav } from "../components/Nav";
import { ListCourse } from "../components/CourseComponents/CourseList";

export function HomeScreen() {
    return (
        <div>
            <Nav />
            <div><img src="https://nihongo-e-na.com/themes/nihongoena2020/images/common/og-img.png" width="1450" height="479"></img></div>
            <ListCourse />
        </div>
    );
    }
