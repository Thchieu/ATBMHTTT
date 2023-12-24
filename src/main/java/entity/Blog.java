package entity;

public class Blog {
    private String id;
    private String name;
    private String poster;
    private String date;
    private String des;
    private String content;
    private String image;
    private String blogImage;

    public Blog() {
    }

    public Blog(String id, String name, String poster, String date, String des, String content, String image, String blogImage) {
        this.id = id;
        this.name = name;
        this.poster = poster;
        this.date = date;
        this.des = des;
        this.content = content;
        this.image = image;
        this.blogImage = blogImage;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getBlogImage() {
        return blogImage;
    }

    public void setBlogImage(String blogImage) {
        this.blogImage = blogImage;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", poster='" + poster + '\'' +
                ", date='" + date + '\'' +
                ", des='" + des + '\'' +
                ", content='" + content + '\'' +
                ", image='" + image + '\'' +
                ", blogImage='" + blogImage + '\'' +
                '}';
    }
}
