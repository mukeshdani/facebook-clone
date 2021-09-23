import { Fragment } from "react";
import Card from "./Bootstrap/Card";
import FBBox from "./FBBox";

const Feed = ({ Birthdays, Pages, NewsFeeds }) => {
  return (
    <div className="col-3 Feed">
      {Birthdays && Birthdays.length > 0 && (
        <FBBox>
          <div className="BirthdayContainer">
            <img src="https://i.imgur.com/6AoNBzI.png" alt="Gift" />
            {Birthdays.map(user => (
              <Fragment key={user.FullName}>
                <a href={user.ProfileURL}>{user.FullName}</a>
                {", "}
              </Fragment>
            ))}
            and 3 others.
          </div>
        </FBBox>
      )}
      {Pages && Pages.length > 0 && (
        <FBBox>
          <div className="PagesContainer">
            <h4>
              Your Pages <span>({Pages.length})</span>
            </h4>
            <ul>
              {Pages.map(page => (
                <li key={page.Avatar}>
                  <img src={page.Avatar} alt={page.Name} />
                  <div className="PageMeta">
                    <a href={page.PageURL}>
                      <strong>{page.Name}</strong>
                    </a>
                    <a href="/">
                      <img
                        src="https://i.imgur.com/bwVSUrj.png"
                        alt="Messages"
                      />
                      Messages ({page.MessageCount})
                    </a>
                    <a href="/">
                      <img
                        src="https://i.imgur.com/iU3hjYR.png"
                        alt="Notifications"
                      />
                      Notifications ({page.NotificationCount})
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FBBox>
      )}
      {NewsFeeds && NewsFeeds.length && (
        <FBBox>
          <div className="FeedsContainer">
            <h4 className="m-0">News Feed</h4>
            <ul>
              {NewsFeeds.map((card, key) => (
                <li key={key}>
                  <Card Image={card.Image} ImgAlign="top">
                    <a href={card.NewsLink}>{card.Title}</a>
                    <p className="m-0 text-muted">
                      Posted{" "}
                      <abbr title={card.DateTime}>{card.DatePosted}</abbr>
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </FBBox>
      )}
    </div>
  );
};

export default Feed;
