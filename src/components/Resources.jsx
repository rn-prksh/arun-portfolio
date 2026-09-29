import { useState } from 'react';
import { FREE_RESOURCES, TUTORIALS } from '../data/portfolioData';
import { Download, BookOpen, ExternalLink, Box, Check, Play } from 'lucide-react';

function Resources() {
  const [downloadedId, setDownloadedId] = useState(null);

  const handleSimulatedDownload = (id) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 2500);
  };

  return (
    <section id="resources" className="section resourcesSection" aria-label="Free 3D Resources and Tutorials">
      <div className="sectionHeader">
        <div className="sectionTag">
          <Box size={14} aria-hidden="true" />
          <span>COMMUNITY & LEARNING</span>
        </div>
        <h2 className="sectionTitle">Free 3D Models, Shaders & Tutorials</h2>
        <p className="sectionSubtitle">
          Free kitbash assets, seamless 4K surface imperfection maps, and in-depth breakdown articles to support the 3D creator community.
        </p>
      </div>

      <div className="freeAssetsGrid">
        {FREE_RESOURCES.map((asset) => (
          <div key={asset.id} className="resourceAssetCard revealOnScroll">
            <div className="assetCardTop">
              <span className="assetTypeBadge">{asset.type}</span>
              <span className="assetDownloadsBadge">🔥 {asset.downloads} Downloads</span>
            </div>

            <h3 className="assetTitle">{asset.title}</h3>
            <p className="assetDesc">{asset.description}</p>

            <div className="assetMetaInfo">
              <span className="assetFormat">Format: {asset.format}</span>
              <span className="assetSize">Size: {asset.fileSize}</span>
            </div>

            <button
              onClick={() => handleSimulatedDownload(asset.id)}
              className="btn secondary assetDownloadBtn"
              aria-label={`Download ${asset.title}`}
            >
              {downloadedId === asset.id ? (
                <>
                  <Check size={16} className="textEmerald" aria-hidden="true" />
                  <span>Asset Download Started!</span>
                </>
              ) : (
                <>
                  <Download size={16} aria-hidden="true" />
                  <span>Download Free Asset Pack</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="tutorialsContainer">
        <div className="tutorialsSubHeader">
          <BookOpen size={18} aria-hidden="true" />
          <h3>Tutorials & Behind-The-Scenes Breakdowns</h3>
        </div>

        <div className="tutorialsListGrid">
          {TUTORIALS.map((tutorial, idx) => (
            <a
              key={idx}
              href={tutorial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tutorialCard revealOnScroll"
            >
              <div className="tutorialIconBox">
                <Play size={18} aria-hidden="true" />
              </div>
              <div className="tutorialContent">
                <div className="tutorialMetaRow">
                  <span className="tutorialPlatform">{tutorial.platform}</span>
                  <span className="tutorialDuration">{tutorial.duration}</span>
                  <span className="tutorialViews">{tutorial.views}</span>
                </div>
                <h4 className="tutorialTitle">{tutorial.title}</h4>
              </div>
              <div className="tutorialArrow">
                <ExternalLink size={18} aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
