package entity;

public class Category {

    private String cID;
    private String cName;

    public Category() {
    }

    public Category(String cID, String cName) {
        this.cID = cID;
        this.cName = cName;
    }

    public String getcID() {
        return cID;
    }

    public void setcID(String cID) {
        this.cID = cID;
    }

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName;
    }

    @Override
    public String toString() {
        return "Category{" +
                "cID='" + cID + '\'' +
                ", cName='" + cName + '\'' +
                '}';
    }
}
