import React from 'react';

function ZeroWasteGuide() {
  const sections = [
    {
      id: 'kitchen',
      icon: '🍽️',
      title: 'Kitchen',
      items: [
        {
          name: 'Reusable cloth grocery bags',
          tip: 'Keep a few folded in your car or by the door so you never forget them.',
        },
        {
          name: 'Glass containers',
          tip: null,
        },
        {
          name: 'Beeswax wraps',
          tip: 'A natural alternative to plastic wrap. Wash with cool water and mild soap — never hot water, it melts the wax.',
        },
        {
          name: 'Silicone food storage bags',
          tip: null,
        },
        {
          name: 'Reusable straws',
          tip: 'Clean with the small brush that usually comes with them, or run pipe cleaners through.',
        },
        {
          name: 'Wooden or bamboo cutting boards',
          tip: 'Oil occasionally with food-safe mineral oil or coconut oil to prevent cracking.',
        },
        {
          name: 'Metal or wooden utensils',
          tip: null,
        },
        {
          name: 'Compostable trash bags',
          tip: null,
        },
        {
          name: 'Reusable coffee cups',
          tip: 'Many coffee shops offer a small discount when you bring your own cup.',
        },
        {
          name: 'Compost your food scraps',
          tip: 'Many towns and cities provide drop-off spots for food waste composting. Check your local municipality\'s website.',
        },
      ],
      foodWasteTips: [
        'Save vegetable skins and ends in a bag in the freezer — simmer them with water to make a rich, free broth.',
        'Stale bread? Cut into cubes and bake, microwave or air fry to make croutons for soups and salads.',
        'Save potato peels, season them, drizzle with olive oil and bake for crispy chips.',
        'Apple peels make a delicious light tea — just simmer in water with a cinnamon stick.',
        'Leftover fruit peels, vegetable ends and herbs can often be regrown on a sunny windowsill.',
      ],
    },
    {
      id: 'cleaning',
      icon: '🧹',
      title: 'Cleaning',
      items: [
        {
          name: 'Swedish dishcloths',
          tip: 'One Swedish dishcloth replaces up to 17 rolls of paper towels. Toss in the dishwasher or washing machine to clean.',
        },
        {
          name: 'Organic cotton, hemp or jute rags',
          tip: 'Or make your own by cutting up clean old cotton shirts, sheets or towels.',
        },
        {
          name: 'Plant bristle brushes',
          tip: null,
        },
        {
          name: 'Cellulose sponges',
          tip: 'Unlike synthetic sponges these are compostable at end of life.',
        },
        {
          name: 'Coconut fiber scrub pads',
          tip: 'A long-lasting replacement for abrasive plastic mesh scrubs. Skoy Scrub is a popular option.',
        },
        {
          name: 'Unplug electronics when not in use',
          tip: 'Or use a smart power strip to eliminate phantom energy drain automatically.',
        },
      ],
      diyRecipes: [
        {
          title: 'DIY All Purpose Cleaner',
          ingredients: [
            '2 cups distilled water',
            '1½ teaspoons Dr. Bronner\'s Sal Suds',
          ],
          instructions: 'Pour water into a glass spray bottle first, then add Sal Suds to avoid bubbles. Shake gently before use. Wipe surfaces completely dry.',
          shelfLife: '6 months to 1 year. Store in a cool, dark place.',
          variants: [
            {
              title: 'If you only have castile soap',
              ingredients: ['1–2 tablespoons Dr. Bronner\'s Liquid Castile Soap', '1 quart warm distilled water'],
              note: 'Gently swirl before each use. The soap and water may slightly separate if left sitting.',
              shelfLife: '3–6 months.',
            },
            {
              title: 'If you only have tap water',
              ingredients: ['2 cups tap water', '2–2½ teaspoons Dr. Bronner\'s Sal Suds'],
              note: 'Only mix what you\'ll use within 2–3 weeks. Tap water contains microscopic bacteria that can cause the mix to spoil or grow mold if left sitting too long. Wipe surfaces immediately and completely dry.',
              shelfLife: '2–3 weeks. Cut recipe in half if you won\'t finish it in time.',
            },
          ],
          tips: [
            'Always pour water into the bottle first to avoid excessive bubbles.',
            'Always wipe surfaces completely dry.',
            'For the tap water version, only mix what you\'ll use within 2–3 weeks.',
          ],
        },
      ],
    },
    {
      id: 'personalcare',
      icon: '🧴',
      title: 'Personal Care',
      items: [
        {
          name: 'Bamboo toothbrushes',
          tip: 'The handle is compostable. Remove the bristles before composting — most are still nylon.',
        },
        {
          name: 'Bar soap',
          tip: 'Lasts longer than liquid soap and uses no plastic packaging.',
        },
        {
          name: 'Natural loofah sponges',
          tip: 'Loofahs are actually a plant — fully compostable at end of life.',
        },
        {
          name: 'Unbleached bamboo toilet paper',
          tip: 'Avoids chemical bleaching agents that can trigger skin irritation or UTIs in sensitive individuals.',
        },
        {
          name: 'Reusable razors',
          tip: 'Razors with replaceable blades/cartridges produce a fraction of the plastic waste of disposable razors.',
        },
      ],
    },
    {
      id: 'laundry',
      icon: '👕',
      title: 'Laundry',
      items: [
        {
          name: 'Wool dryer balls',
          tip: 'Replace dryer sheets entirely. Add a few drops of essential oil for scent. Lasts for hundreds of loads!',
        },
        {
          name: 'Wash full loads only',
          tip: 'Washing full loads uses the same amount of water as a half load. If possible, wait until you have a full machine.',
        },
        {
          name: 'Wash in cold water',
          tip: 'About 90% of the energy used by a washing machine goes toward heating the water. Cold water cleans just as well for most loads.',
        },
      ],
    },
    {
      id: 'shopping',
      icon: '🛍️',
      title: 'Shopping & Food',
      items: [
        {
          name: 'Buy from local farmers or markets',
          tip: 'Local food travels shorter distances, uses less packaging and is often fresher and tastier. Many farmers markets accept SNAP/EBT.',
        },
        {
          name: 'Shop secondhand and thrift',
          tip: 'Buying secondhand saves the water, energy and landfill space needed to make something new. One secondhand clothing item saves an average of 700 gallons of water.',
        },
        {
          name: 'Buy in bulk when possible',
          tip: 'Bulk bins at grocery stores use far less packaging than individually wrapped items.',
        },
      ],
    },
  ];

  return (
    <div style={{
      backgroundColor: '#FAF7F2',
      minHeight: '100vh',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div style={{
        backgroundColor: '#4F8C6F',
        padding: '40px 24px 32px',
        textAlign: 'center',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: '0 0 8px 0' }}>
          A Mira Guide
        </p>
        <h1 style={{
          color: 'white',
          fontSize: '40px',
          fontWeight: '700',
          margin: '0 0 12px 0',
          lineHeight: '1.2',
        }}>
          🌱 The Zero Waste Guide
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: '18px',
          maxWidth: '560px',
          margin: '0 auto',
          lineHeight: '1.7',
        }}>
          Small everyday swaps that reduce waste and save money no matter where you live or how much you can spend.
        </p>
        <button
          onClick={() => window.history.back()}
          style={{
            marginTop: '20px',
            backgroundColor: 'transparent',
            color: 'rgba(255,255,255,0.8)',
            border: '1px solid rgba(255,255,255,0.4)',
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '14px',
            cursor: 'pointer',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          ← Back to Mira
        </button>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: '32px 24px 80px',
      }}>

        {sections.map((section) => (
          <div key={section.id} style={{ marginBottom: '48px' }}>

            {/* Section Header */}
            <h2 style={{
              color: '#2C2C2C',
              fontSize: '24px',
              fontWeight: '700',
              margin: '0 0 20px 0',
              paddingBottom: '10px',
              borderBottom: '2px solid #EBF3EE',
            }}>
              {section.icon} {section.title}
            </h2>

            {/* Items */}
            {section.items.map((item, index) => (
              <div key={index} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#4F8C6F', fontSize: '16px', marginTop: '2px', flexShrink: 0 }}>•</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#2C2C2C', fontSize: '15px', fontWeight: '500', margin: 0 }}>
                      {item.name}
                    </p>
                    {item.tip && (
                      <p style={{
                        color: '#666',
                        fontSize: '14px',
                        margin: '4px 0 0 0',
                        lineHeight: '1.6',
                        fontStyle: 'italic',
                      }}>
                        💡 {item.tip}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Food Waste Tips */}
            {section.foodWasteTips && (
              <div style={{
                backgroundColor: '#EBF3EE',
                borderRadius: '16px',
                padding: '20px',
                marginTop: '24px',
              }}>
                <h3 style={{ color: '#2C2C2C', fontSize: '16px', fontWeight: '600', margin: '0 0 14px 0' }}>
                  🥦 Don't throw that away — tips to use what you have
                </h3>
                {section.foodWasteTips.map((tip, index) => (
                  <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <span style={{ color: '#4F8C6F', flexShrink: 0 }}>•</span>
                    <p style={{ color: '#2C2C2C', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{tip}</p>
                  </div>
                ))}
              </div>
            )}

            {/* DIY Recipes */}
            {section.diyRecipes && section.diyRecipes.map((recipe, rIndex) => (
              <div key={rIndex} style={{
                backgroundColor: '#FDF0E8',
                borderRadius: '16px',
                padding: '20px',
                marginTop: '24px',
              }}>
                <h3 style={{ color: '#2C2C2C', fontSize: '16px', fontWeight: '600', margin: '0 0 14px 0' }}>
                  🧪 {recipe.title}
                </h3>
                <p style={{ color: '#666', fontSize: '13px', fontWeight: '600', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Ingredients
                </p>
                {recipe.ingredients.map((ing, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ color: '#D4956A' }}>•</span>
                    <p style={{ color: '#2C2C2C', fontSize: '14px', margin: 0 }}>{ing}</p>
                  </div>
                ))}
                <p style={{ color: '#2C2C2C', fontSize: '14px', margin: '12px 0 8px 0', lineHeight: '1.6' }}>
                  {recipe.instructions}
                </p>
                <p style={{ color: '#D4956A', fontSize: '13px', margin: '0 0 16px 0' }}>
                  ⏱ Shelf life: {recipe.shelfLife}
                </p>

                {recipe.variants && recipe.variants.map((variant, vIndex) => (
                  <div key={vIndex} style={{
                    borderTop: '1px solid rgba(212,149,106,0.2)',
                    paddingTop: '14px',
                    marginTop: '14px',
                  }}>
                    <p style={{ color: '#D4956A', fontSize: '13px', fontWeight: '600', margin: '0 0 8px 0' }}>
                      {variant.title}
                    </p>
                    {variant.ingredients.map((ing, i) => (
                      <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ color: '#D4956A' }}>•</span>
                        <p style={{ color: '#2C2C2C', fontSize: '14px', margin: 0 }}>{ing}</p>
                      </div>
                    ))}
                    <p style={{ color: '#666', fontSize: '13px', margin: '8px 0 4px 0', lineHeight: '1.6', fontStyle: 'italic' }}>
                      {variant.note}
                    </p>
                    <p style={{ color: '#D4956A', fontSize: '13px', margin: 0 }}>
                      ⏱ Shelf life: {variant.shelfLife}
                    </p>
                  </div>
                ))}

                {recipe.tips && (
                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    marginTop: '16px',
                  }}>
                    <p style={{ color: '#D4956A', fontSize: '13px', fontWeight: '600', margin: '0 0 8px 0' }}>
                      ⚠️ Tips
                    </p>
                    {recipe.tips.map((tip, i) => (
                      <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ color: '#D4956A' }}>•</span>
                        <p style={{ color: '#2C2C2C', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{tip}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Footer */}
        <div style={{
          backgroundColor: '#EBF3EE',
          borderRadius: '16px',
          padding: '24px',
          textAlign: 'center',
        }}>
          <p style={{ color: '#666', fontSize: '13px', margin: '0 0 16px 0', lineHeight: '1.6' }}>
            Mira is a free platform built to make clean living accessible to everyone — regardless of income, housing or language.
          </p>
          <button
            onClick={() => window.history.back()}
            style={{
              backgroundColor: '#4F8C6F',
              color: 'white',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '30px',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            ← Back to Mira
          </button>
        </div>

      </div>
    </div>
  );
}

export default ZeroWasteGuide;