package entity;

public class Price {
    double giadau, giacuoi;

    public Price(double giadau, double giacuoi) {
        this.giadau = giadau;
        this.giacuoi = giacuoi;
    }

    public double getGiadau() {
        return giadau;
    }

    public void setGiadau(double giadau) {
        this.giadau = giadau;
    }

    public double getGiacuoi() {
        return giacuoi;
    }

    public void setGiacuoi(double giacuoi) {
        this.giacuoi = giacuoi;
    }

    @Override
    public String toString() {
        return "Price{" +
                "giadau=" + giadau +
                ", giacuoi=" + giacuoi +
                '}';
    }
}
